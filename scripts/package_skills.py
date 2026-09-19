"""Build reproducible, self-contained Codex skill archives using standard Python."""
import argparse
import os
from pathlib import Path
import tempfile
import zipfile

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / '.agents' / 'skills'
FILES = ('SKILL.md', 'references.md', 'example.md', 'catalog.json')


def archive(target, skills):
    descriptor, temporary = tempfile.mkstemp(prefix='.package-', suffix='.zip', dir=target.parent)
    os.close(descriptor)
    try:
        with zipfile.ZipFile(temporary, 'w', compression=zipfile.ZIP_DEFLATED) as output:
            for skill in skills:
                for name in FILES:
                    source = skill / name
                    if source.is_symlink() or not source.is_file():
                        raise ValueError(f'Expected regular packaged file: {source}')
                    entry = zipfile.ZipInfo(f'{skill.name}/{name}', date_time=(2026, 1, 1, 0, 0, 0))
                    entry.compress_type = zipfile.ZIP_DEFLATED
                    entry.external_attr = 0o100644 << 16
                    output.writestr(entry, source.read_bytes())
        os.replace(temporary, target)
    finally:
        Path(temporary).unlink(missing_ok=True)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--output', type=Path, default=ROOT / 'public' / 'downloads')
    args = parser.parse_args()
    target = args.output.resolve()
    if target == SOURCE.resolve() or SOURCE.resolve() in target.parents or target in SOURCE.resolve().parents:
        raise ValueError('Package output must be separate from skill sources')
    target.mkdir(parents=True, exist_ok=True)
    skills = sorted(path for path in SOURCE.iterdir() if path.is_dir() and not path.is_symlink())
    for skill in skills:
        archive(target / f'{skill.name}.zip', [skill])
    archive(target / 'skills-all.zip', skills)
    wanted = {f'{skill.name}.zip' for skill in skills} | {'skills-all.zip'}
    # Retire obsolete generated packages; preserve unrelated files in the output directory.
    for old in target.iterdir():
        if old.suffix in {'.zip', '.skill'} and old.name not in wanted:
            old.unlink()
    print(f'Packaged {len(skills)} skills and one bundle.')


if __name__ == '__main__':
    main()

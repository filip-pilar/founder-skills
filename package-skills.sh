#!/bin/bash
# Package all skills as .skill files (zip with .skill extension)
# Usage: ./package-skills.sh
# Output: public/downloads/*.skill files ready for Claude Web/Desktop upload

set -euo pipefail

SKILLS_DIR="skills"
DIST_DIR="public/downloads"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
DIM='\033[2m'
NC='\033[0m'

# Clean and create dist directory
rm -rf "$DIST_DIR"
mkdir -p "$DIST_DIR"

echo -e "${BLUE}Packaging skills from ${SKILLS_DIR}/${NC}"
echo ""

count=0
for skill_dir in "$SKILLS_DIR"/*/; do
  [ -d "$skill_dir" ] || continue

  skill_name=$(basename "$skill_dir")

  # Verify SKILL.md exists
  if [ ! -f "$skill_dir/SKILL.md" ]; then
    echo -e "  ${DIM}Skipping $skill_name (no SKILL.md)${NC}"
    continue
  fi

  skill_file="$DIST_DIR/${skill_name}.skill"
  zip_file="$DIST_DIR/${skill_name}.zip"

  # Zip the skill directory contents (both .skill and .zip)
  (cd "$SKILLS_DIR" && zip -qr - "$skill_name") > "$skill_file"
  cp "$skill_file" "$zip_file"

  # Get file count and size
  file_count=$(find "$skill_dir" -type f | wc -l | tr -d ' ')
  size=$(du -sh "$skill_file" | cut -f1 | tr -d ' ')

  echo -e "  ${GREEN}✓${NC} ${skill_name} ${DIM}(${file_count} files, ${size})${NC}"
  count=$((count + 1))
done

echo ""
echo -e "${GREEN}Packaged $count skills into ${DIST_DIR}/${NC}"
echo ""

# Also create an all-in-one bundle
all_bundle="$DIST_DIR/founder-skills-all.skill"
(cd "$SKILLS_DIR" && zip -qr - .) > "$all_bundle"
cp "$all_bundle" "$DIST_DIR/skills-all.zip"
all_size=$(du -sh "$all_bundle" | cut -f1 | tr -d ' ')
echo -e "${BLUE}Bundle:${NC} founder-skills-all ${DIM}(${all_size})${NC}"

echo ""
echo "Files ready in ${DIST_DIR}/:"
ls -lh "$DIST_DIR"/*

if [[ `git status --porcelain` ]]; then
  echo "Changes detected"
  exit 1
fi
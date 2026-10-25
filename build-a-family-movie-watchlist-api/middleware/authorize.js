export function authorizeModification(req, res, next) {
  const isParent = req.user?.role === "parent";
  const isChild = req.user?.role === "child";
  const ownsWatchlist = String(req.user?.id) === req.params.userId;

  if (!isParent && (!isChild || !ownsWatchlist)) {
    return res.status(403).json({ error: "Access denied" });
  }

  next();
}

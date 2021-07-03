const verifyId = (req, res, next) => {
  const { id } = req.params;
  if ( Number (id) !== NaN) next();
  return res.status(422).json({ message: 'id inválido' });
}

module.exports = {
  verifyId,
}
function feed(_parent, args, context, _info) {
  return context.prisma.links();
}

module.exports = {
  feed,
};

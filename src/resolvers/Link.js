function postedBy(parent, _args, context, _info) {
  return context.prisma.link({ id: parent.id }).postedBy();
}

module.exports = {
  postedBy,
};

function postedBy(parent, _args, context, _info) {
  return context.prisma.link({ id: parent.id }).postedBy();
}

function votes(parent, args, context, _info) {
  return context.prisma.link({ id: parent.id }).votes();
}

module.exports = {
  postedBy,
  votes,
};

function link(parent, _args, context, _info) {
  return context.prisma.vote({ id: parent.id }).link();
}

function user(parent, _args, context, _info) {
  return context.prisma.vote({ id: parent.id }).user();
}

module.exports = {
  link,
  user,
};

function links(parent, _args, context, _info) {
  return context.prisma.user({ id: parent.id }).links();
}

module.exports = {
  links,
};

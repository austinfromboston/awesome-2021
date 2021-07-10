const linkResolver = (doc) => {
  if (doc.type === 'bring_list') {
    return `/bring`
  }
  return '/'
}

module.exports = linkResolver

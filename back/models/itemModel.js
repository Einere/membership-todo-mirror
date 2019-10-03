const itemModel = (result) => {
    return {
        id: result.id,
        src: result.src,
        category: result.category,
        title: result.title,
        content: result.content,
        href: result.href,
        link: result.link,
    };
};

module.exports = itemModel;
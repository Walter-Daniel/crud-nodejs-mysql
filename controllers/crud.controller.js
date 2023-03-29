const getProduct = ( req, res ) => {
    res.status(400).json(
        {
            ok: true,
            msg: 'Metodo get'
        }
    )
};
const createProduct = ( req, res ) => {
    res.status(400).json(
        {
            ok: true,
            msg: 'Metodo post'
        }
    )
};
const editProduct = ( req, res ) => {
    res.status(400).json(
        {
            ok: true,
            msg: 'Metodo put'
        }
    )
};
const deleteProduct = ( req, res ) => {
    res.status(400).json(
        {
            ok: true,
            msg: 'Metodo delete'
        }
    )
};

module.exports = {
    getProduct,
    createProduct,
    editProduct,
    deleteProduct
}
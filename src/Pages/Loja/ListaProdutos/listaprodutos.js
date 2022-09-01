import React, { useEffect, useState } from 'react'
import commerce from '../../../Lib/commerce'
import ProdutoUnico from '../ProdutoUnico/produtounico'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// https://mui.com/pt/


export default function ListaProdutos({ products }) {


    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        commerce.products.list()
            .then((product) => {
                setProdutos(product.data)
                console.log("PRODUTOS: ", product.data)
            })
            .catch((error) => console.log("ERROR AQUI", error))
    }, [1000])


    return <>

        <h1>Produtos</h1>
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {produtos.map((produto) => (

                        <Grid item xs={2} sm={4} md={4} key={produto}>
                            
                                <ProdutoUnico
                                    key={produto.id}
                                    product={produto}
                                />
                            
                        </Grid>


                    ))}

                </Grid>
            </Box>


            {/* {produtos.map((produto) => (
            <ul key={produto.id}>
            <li>Produto: {produto.name}</li>
            <li>Descrição: {produto.description}</li>
            <li>Codigo: {produto.sku}</li>
            </ul>
        ))}  */}
        </div>
    </>
}


// ListaProdutos.propTypes = {
//     produtos: PropTypes.array,
// };
import { useEffect, useState } from "react"
import { getSnacks } from "../../../api"
import { Container, ContainerSelectList } from "../../../components/Card"
import { Snack } from "../../../interfaces/snack.interface"
import { useSaleContext } from "../SaleContext"

const SelectSnacks = () => {
    const [listSnacks, setListSnacks] = useState<Array<Snack>>()
    const { snacks, setSnacks } = useSaleContext()

    useEffect(() => {
        const getListSnacks = async() => {
            const response = await getSnacks()
            setListSnacks(response.data)
        }
        getListSnacks()
    }, [])
    
    const handleOnClick = (select: Snack) => {
        if(snacks.find((drink: Snack) => drink.name === select.name)){
            const filter = snacks.filter((drink: Snack) => drink.name !== select.name)
            setSnacks(filter)
            return
        }
        setSnacks([...snacks, select])
    }

    return(
        <ContainerSelectList>
            <Container style={{ color: '#fff', padding: '6px 12px', backgroundColor: '#0bb0f8' }}>
                Snacks
            </Container>
            <ul>
                {
                    listSnacks?.map((snack: Snack) => (
                        <li
                            key={snack.name}
                            className={
                                snacks.find((snackSelect: Snack) => snackSelect.name === snack.name)
                                    ? 'Select' : ''
                            }
                            onClick={() => handleOnClick(snack)} 
                        >
                            {snack.name}
                        </li>   
                    ))
                }
            </ul>
        </ContainerSelectList>
    )
}

export default SelectSnacks
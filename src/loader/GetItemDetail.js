export default function GetItemDetail({params}) {
    const storedItems = localStorage.getItem('stock')
    const items = storedItems ? JSON.parse(storedItems) : []
    
    const item = items.find(item => item.id === params.itemId)

    if(!item){
        throw new Response("Item nao encontrado", { status: 404 })
    }

    return item
}
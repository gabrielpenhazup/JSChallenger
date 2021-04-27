const lockers = [{
    type: 'Categoria1',
    content: [
        "xxxxx 1",
        "xxxxx 2"
    ]
},
{
    type: 'Categoria2',
    content: [
        "xxxxx 1",
        "xxxxx 2",
        "xxxxx 3",
    ]
},

{
    type: 'Categoria1',
    content: [
        "xxxxx 1",
        "xxxxx 3"
    ]
},
{
    type: 'Categoria1',
    content: [
        "xxxxx 4",
    ]
},
{
    type: 'Categoria2',
    content: [
        "xxxxx 3",
    ]
},
{
    type: 'Categoria3',
    content: [
        "xxx 1",
    ]
},
]

const result = [...new Set(lockers.map(typeFiltered => typeFiltered.type))]
    .map(typeFiltered => {
        return {
            type: typeFiltered,
            content: [...new Set(lockers.filter(contentFiltered => contentFiltered.type === typeFiltered)
                .reduce((result, item) => {
                    return [...result, ...item.content]
                }, []))
            ]
        }
    })

var listContent = result
    .map(function (item, indice) {
        return [
            '<tr><td>' + item.type + '</td></tr>',
            '<tr><td>' + item.content + '</td></tr>'
        ]
    })

document.getElementById('content').innerHTML = listContent;
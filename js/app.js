const lockers = [
    {
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
            "xxxxx 5",
            "xxxxx 6",
            "xxxxx 7",
            "xxxxx 8",
            "xxxxx 9",
            "xxxxx 10",
            "xxxxx 11",
            "xxxxx 12",
            "xxxxx 13",
            "xxxxx 14",
            "xxxxx 15",
            "xxxxx 16",
            "xxxxx 17",
            "xxxxx 18",
            "xxxxx 19",
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

const listContent = result
    .map((item) => {
        return (
            `<thead>
                <tr>
                    <th>${item.type}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${item.content}</td>
                </tr>
            </tbody>
            `
        )
    })

document.getElementById('content').innerHTML = listContent.join('');
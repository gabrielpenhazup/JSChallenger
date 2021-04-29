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
            "xxxxx 2"
        ]
    },
    {
        type: 'Categoria1',
        content: [
            "xxxxx 3",
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

//first solution
function JoinAndFilterFirstArray() {
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

    ShowFirstArrayFiltered(result);
}

JoinAndFilterFirstArray();

function ShowFirstArrayFiltered(result) {
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

    document.getElementById('firstSolution').innerHTML = listContent.join('');
}

//second solution
function JoinAndFilterSecondArray() {
    for (let i = 0; i < lockers.length; i++) {
        for (let j = 1; j < lockers.length; j++) {
            if (lockers[i].type === lockers[j].type) {
                const contentCurrent = lockers[i].content;
                const contentNext = lockers[j].content;
                lockers[i].content = [...new Set([...contentCurrent, ...contentNext])];
            }
        }
    }

    const arrayFiltered = [...new Set(lockers.map(typeFiltered => typeFiltered.type))]
        .map(type => {
            return lockers.find(a => a.type === type)
        })

    ShowSecondArrayFiltered(arrayFiltered);
}

JoinAndFilterSecondArray();

function ShowSecondArrayFiltered(arrayFiltered) {
    const listArrayFiltered = arrayFiltered
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

    document.getElementById('secondSolution').innerHTML = listArrayFiltered.join('');
}
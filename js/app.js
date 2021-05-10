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
function showFirstArray(result) {
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

function joinAndOrganizeFirstArray() {
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
    showFirstArray(result);
}
joinAndOrganizeFirstArray();

//second solution
function showSecondArray(array) {
    const listArrayFiltered = array
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

function removeDuplicateType() {
    const lockersUniqueCategory = []
    lockers.forEach((item) => {
        const lockersCategory = lockersUniqueCategory.some((unique) => (
            unique.type === item.type
        ));
        if (!lockersCategory) {
            lockersUniqueCategory.push(item)
        }
    })
    showSecondArray(lockersUniqueCategory)
}

function joinSecondArray() {
    for (let i = 0; i < lockers.length; i++) {
        for (let j = 1; j < lockers.length; j++) {
            if (lockers[i].type === lockers[j].type) {
                const contentCurrent = lockers[i].content;
                const contentNext = lockers[j].content;
                lockers[i].content = [...contentCurrent, ...contentNext];
            }
        }
        const lockersUniqueContent = []
        lockers[i].content.forEach((item) => {
            const lockersContent = lockersUniqueContent.some((unique) => (
                unique === item
            ));
            if (!lockersContent) {
                lockersUniqueContent.push(item)
            }
        })
        lockers[i].content = lockersUniqueContent
    }
    removeDuplicateType()
}
joinSecondArray();
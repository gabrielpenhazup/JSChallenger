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

//show arrays
function showArray(array) {
    const listArrayFiltered = array
        .map(({type, content}) => {
            return (
                `<thead>
                <tr>
                    <th>${type}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${content}</td>
                </tr>
            </tbody>
            `
            )
        })
    array === lockers
        ? document.getElementById('secondSolution').innerHTML = listArrayFiltered.join('')
        : document.getElementById('firstSolution').innerHTML = listArrayFiltered.join('');
}

//first solution
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
    showArray(result);
}
joinAndOrganizeFirstArray();

//second solution
function removeDuplicateContent() {
    for (let i = 0; i < lockers.length; i++) {
        const uniques = [];
        lockers[i].content.forEach((item) => {
            const secondItem = item;
            let isDuplicated = false;

            for (var i = 0; i < uniques.length; i++) {
                if (uniques[i] === item) {
                    isDuplicated = true;
                    break;
                }
            }

            if (!isDuplicated) {
                uniques.push(secondItem);
            }
        });
        lockers[i].content = uniques
    }

}

function removeDuplicateType() {
    for (let i in lockers) {
        let valueCompared = lockers[i].type
        let cont = 0
        for (let i in lockers) {
            if (valueCompared === lockers[i].type) {
                cont += 1
                if (cont > 1) {
                    cont--
                    delete lockers[i]
                }
            }
        }
    }
    showArray(lockers)
}

function joinSecondArray() {
    for (let i = 0; i < lockers.length; i++) {
        for (let j = 1; j < lockers.length; j++) {
            if (lockers[i].type === lockers[j].type) {
                const contentCurrent = lockers[i].content;
                const contentNext = lockers[j].content;
                const result = contentCurrent.concat(contentNext);
                result.forEach((item) => {
                    lockers[i].content.push(item)
                })
            }
        }
        removeDuplicateContent()
    }
    removeDuplicateType()
}
joinSecondArray();
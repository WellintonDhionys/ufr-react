export const categoria = {
    '001': {
        nome: 'Alimentação',
        id: 0,
        subCat: [
            {nome: 'Mercado'},
            {nome: 'Padaria'},
            {nome: 'Outros'}
        ]
    },
    '002': {
        nome: 'Transporte',
        id: 1,
        subCat: [
            {nome: 'Onibus'},
            {nome: 'Carro'}
        ]
    },
    '003': {
        nome: 'Educação',
        id: 2,
        subCat: [
            {nome: 'Material'},
            {nome: 'Cursos'}
        ]
    },
    '004': {
        nome: 'Casa',
        id: 3,
        subCat: [
            {nome: 'Material'},
            {nome: 'Cursos'}
        ]
    },
    '005': {
        nome: 'Outros',
        id: 4,
        subCat: [
            {nome: 'Material'},
            {nome: 'Cursos'}
        ]
    }
}

export const options = {
    title: {
      text: "Movimentação"
    },
    axisY: {
        prefix: "$",
        includeZero: false
    },
    axisY2: {
        prefix: "$",
        includeZero: false
    },
    data: [
        {				
            type: "line",
            dataPoints: [
                { label: "jan",  y: 3700  },
                { label: "fev", y: 3500 },
                { label: "mar", y: 3750  },
                { label: "abr",  y: 3700  },
                { label: "mai",  y: 3700  },
                { label: "jun",  y: 3700  },
                { label: "jul", y: 3400  },
                { label: "ago", y: 3700  },
                { label: "set",  y: 3700  },
                { label: "out",  y: 3700  },
                { label: "nov",  y: 4100  },
                { label: "dez",  y: 4100  }
            ]
        },
        {				
            type: "line",
            dataPoints: [
                { label: "jan",  y: 3400  },
                { label: "fev", y: 3700  },
                { label: "mar", y: 3000  },
                { label: "abr",  y: 3700  },
                { label: "mai",  y: 3700  },
                { label: "jun",  y: 3900  },
                { label: "jul", y: 3700  },
                { label: "ago", y: 3700  },
                { label: "set",  y: 3000  },
                { label: "out",  y: 3000  },
                { label: "nov",  y: 3700  },
                { label: "dez",  y: 3700  }
            ]
        }
    ],
 }
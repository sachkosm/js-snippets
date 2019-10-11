var data = [
    {
        filePath:
            ["Saved Reports",
            "InsideFolder",
            "InsideFolder",
            "FileName"]
    },
    {
        filePath:
            ["Folder1",
            "InsideFolder",
            "InsideFolder",
            "FileName"]
    },
    {
        filePath:
            ["Folder 2",
                "InsideFolder",
                "InsideFolder",
                "FileName"]
    },
    {
        filePath:
            ["Saved Reports",
            "InsideFolder",
            "FileName"]
    },

]


const sortReportTree = (data) => {

    let reportsTree = data

    const onTop = 'Saved Reports'
    let pattern = /^Saved Reports/i; // replace 
    reportsTree.sort((a, b) => {
        if (a.filePath && b.filePath) {
            //Identify folders and make them lighter so they will be on the top
            let oneArr = a.filePath.map((item, index, array) => {
                if (item !== onTop && index !== 0 && index !== array.length - 1) {
                    return String.fromCharCode(31) + item
                }
                return item
            })
            let twoArr = b.filePath.map((item, index, array) => {
                if (item !== onTop && index !== 0 && index !== array.length - 1) {
                    return String.fromCharCode(31) + item
                }
                return item
            })

            //Move 'Saved Reports' to the top by making them lighter
            let one = oneArr.join().replace(pattern, String.fromCharCode(31)).toUpperCase()
            let two = twoArr.join().replace(pattern, String.fromCharCode(31)).toUpperCase()

            if (one < two) {
                return -1;
            }
            if (one > two) {
                return 1;
            }
            return 0;
        }
    })

    return reportsTree
}


console.log(sortReportTree(data))


let input = {
    "agg_filter": {
        "rules": [{
            "operator": "EQUALS",
            "field": "SUM('Age Rate')", "id": "r-d29bf21ff64440169111d2245b071cd7", "value": ""
        },
        {
            "operator": "EQUALS", "field": "SUM('Accrued Acct')",
            "id": "r-11f30391d618456ca8d0febd8e2d7e4b", "value": ""
        },
        {
            "id": "g-66adf2fa-1d07-4514-8f30-80588230f2fa",
            "rules": [{
                "id": "r-340240bd-2777-4c3a-821b-507dce42ff39", "field": "ArcticControlDetail.SubmissionUnitID",
                "value": "12", "operator": "EQUALS"
            }], "combinator": "AND"
        }, {
            "id": "g-63f396f9-aa11-4b5a-bfc0-bd33e17c55d0",
            "rules": [{ "id": "r-10336a5a-7618-43a3-a025-92aa407c7493", "field": "ArcticControlDetail.Submission", "value": "123", "operator": "EQUALS" },
            {
                "id": "g-91150dcb-8109-47e4-aa27-06c7ca94d7a0", "rules": [{
                    "id": "g-bec21fb1-6844-4655-9712-33962aeca213",
                    "rules": [{
                        "id": "r-13a14438-4df0-4faf-8211-fef278598128", "field": "SUM('Accrued Acct')",
                        "value": "344", "operator": "EQUALS"
                    }], "combinator": "AND"
                }], "combinator": "AND"
            }], "combinator": "AND"
        },
        { "id": "r-f32e44ea-f200-499d-bba2-5c209a206d2e", "field": "SUM('ATM')", "value": "344", "operator": "EQUALS" },
        {
            "id": "g-43292736-287c-4e89-b500-af823b52a7d5",
            "rules": [], "combinator": "AND"
        }], "combinator": "AND", "id": "g-d2715146322042de912d90003eba46c8"
    },
    "measures": ["SUM('Age Rate')", "SUM('Accrued Acct')", "SUM('ATM')"], "meta_view": "Risk"
}

// o -> object to search
// prop -> prop name to to search for
// val -> the value to match in the prop
// returns the first object that has the prop with the value
// if not found - returns undefined

function findByProp(o, prop, val) {
    if(o==null) return false;
    if( o[prop] === val ){
        return o;
    }
    var result, p; 
    for (p in o) {
       if( o.hasOwnProperty(p) && typeof o[p] === 'object' ) {
           result = findByProp(o[p], prop, val);
           if(result){
               return result;
           }
       }
    }
    return result;
}

let result = findByProp(input, 'field', "ArcticControlDetail") // should return undefined
let result2 = findByProp(input, 'field', "ArcticControlDetail.Submission") // should return object


console.log(result)
console.log(result2)

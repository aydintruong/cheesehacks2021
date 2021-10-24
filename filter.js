function filterByCategory(elements, target=null){
    if(target=null){
        return elements;
    }
    const lst = new Set();
    for(el in elements){
        if(el.getCategory.equals(target)){
            lst.add(el);
        }
    }
    return lst;
}
function filterByLocation(elements, target=null){
    if(target=null){
        return elements;
    }
    const lst = new Set();
    for(el in elements){
        if(el.getLocation.equals(target)){
            lst.add(el);
        }
    }
    return lst;
}
function filterByTime(elements, target=null){
    if(target=null){
        return elements;
    }
    const lst = new Set();
    for(el in elements){
        if(el.getTime.equals(target)){
            lst.add(el);
        }
    }
    return lst;
}
function intersection(setA, setB) {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    }
    return _intersection
}
function filter(a, b, c){
    int1 = intersection(a,b);
    int2 = intersection(b,c);
    return intersection(int1,int2);
}
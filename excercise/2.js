var car = {
    
    'name' : 'BMW',
    'start' : function() {},
    '001' : 123
    
}

car.name
car['name']

car.001  // 掛掉，所有的字串都合法，.接的只能是識別職，列外數字開頭、空白用['']。
car['001']
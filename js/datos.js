
export const poblaciones =[
    {nombre: "Barcelona", cp: "08001",},
    {nombre: "Cerdanyola del vallès", cp: "08290",},
    {nombre: "Viladecavals", cp: "08232"},
    {nombre: "Terrassa", cp: "08230"}
];

export const categorias =[
    {id: "frutas_vegetales", nombre: "Frutas y vegetales",},
    {id: "panes_patatas", nombre: "Panes y patatas",},
    {id: "lacteos", nombre: "Leche y quesos",},
    {id: "carnes_pescados", nombre: "Carnes y pescados",},
    {id: "cereales_pasta", nombre: "Cereales y pastas",},
];

export const productos = [
    //frutas_vegetales
    {id: "manzana", nombre: "Manzana", imagen: "manzana.jpg", categoria: "frutas_vegetales"},
    {id: "pimiento", nombre: "Pimiento", imagen: "pimiento.jpg", categoria: "frutas_vegetales"},
    //panes_patatas
    {id: "panBlanco", nombre: "Pan blanco", imagen: "pan.jpg", categoria: "panes_patatas"},
    {id: "patataBlanca", nombre: "Patata blanca", imagen: "patatas.jpg", categoria: "panes_patatas"},
    //lacteos
    {id: "leche", nombre: "Leche", imagen: "leche.jpg", categoria: "lacteos"},
    //carnes_pescados
    {id: "hamburguesa", nombre: "Hamburguesa", imagen: "hamburguesa.jpg", categoria: "carnes_pescados"},
    {id: "salmon", nombre: "Salmón",imagen: "salmon.jpg", categoria: "carnes_pescados"},
    //cereales_pasta
    {id: "macarrones", nombre: "Macarrones",imagen: "macarrones.jpg", categoria: "cereales_pasta"},
];

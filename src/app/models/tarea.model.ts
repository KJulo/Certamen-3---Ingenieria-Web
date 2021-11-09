export interface tarea{
  _id:number;
  titulo:string,
  estado: string;
}


export let listaTareas:Array<tarea> = [{
    _id: 0,
    titulo: "certamen",
    estado: "Iniciado"
  },
  {
    _id: 1,
    titulo: "certamen",
    estado: "Iniciado"
  },
  {
    _id: 2,
    titulo: "certamen",
    estado: "Iniciado"}
];

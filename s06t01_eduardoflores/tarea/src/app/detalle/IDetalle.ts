import { IEnlace } from "../enlace/IEnlace"
import { IFoto } from "../foto/IFoto"

export interface IDetalle {
  titulo: string
  subtitulo: string
  foto: IFoto
  enlace: IEnlace
}
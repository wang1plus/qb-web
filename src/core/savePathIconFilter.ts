const SAVE_PATH_ICON_MAP: {[key: string]: string} = {
  '/home/qbit/downloads/': 'mdi-movie',
  '/ext_disk_1/medias/':'mdi-movie-check',
  // mdi-movie-cog
//  mdi-movie-cog-outline
//mdi-movie-edit
  //mdi-movie-edit-outline
  //mdi-movie-filter
  //mdi-movie-filter-outline
  //mdi-movie-minus
  //mdi-movie-off
  //mdi-movie-off-outline
  //mdi-movie-off-outline
}
const DEFAULT = 'mdi-movie';
export function savePathIconFilter(savePath: string){
  const val = SAVE_PATH_ICON_MAP[savePath]
  return val? val: DEFAULT
}
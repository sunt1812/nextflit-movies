 export function ramdonBgbaColor (opacity) {
     const a = Math.round(Math.random() * 255)
     const b = Math.round(Math.random() * 255)
     const c = Math.round(Math.random() * 255)
     let color = `rgba(${a},${b},${c},${opacity})`
     return color
 }
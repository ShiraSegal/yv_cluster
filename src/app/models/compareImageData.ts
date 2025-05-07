export interface compareImageData {
    __type: string;
    Fname: string; // קישור לתמונה
    Descr: string; // תיאור
    imageUrl?: string; // קישור לתמונה
    imageName?: string; // שם התמונה
  }
  
  // // דוגמה לשימוש
  // const data: compareImageData[] = [
  //   {
  //     __type: "ClusteredNamesSystem.MultimediaData",
  //     Fname: "http://sapir.yadvashem/documentation2/13/11385787_03293693/00059.jpg",
  //     Descr: "13890741"
  //   },
  //   {
  //     __type: "ClusteredNamesSystem.MultimediaData",
  //     Fname: "https://namesfs.yadvashem.org/YADVASHEM/JPG/23122024_9291/121.jpg",
  //     Descr: "15987383"
  //   }
  // ];
  
  // // הוספת שם התמונה מתוך הקישור
  // data.forEach(item => {
  //   if (item.Fname) {
  //     item.imageName = item.Fname.split("/").pop(); // שם התמונה מתוך ה-URL
  //   }
  // });
  
  // // הדפסה לדוגמה
  // console.log(data);
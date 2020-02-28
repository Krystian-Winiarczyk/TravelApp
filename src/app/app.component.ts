import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  travels = [
    { id: 1, img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM3Njd9&w=1000&q=80' },
    { id: 2, img: 'https://i.pinimg.com/originals/14/81/c4/1481c418f171a86bf5d8f622aafb3b42.jpg' },
    { id: 3, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/NZ_Landscape_from_the_van.jpg' },
    { id: 4, img: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg' },
    { id: 5, img: 'https://syndlab.com/files/view/5db9b150252346nbDR1gKP3OYNuwBhXsHJerdToc5I0SMLfk7qlv951730.jpeg' },
    { id: 6, img: 'https://lh3.googleusercontent.com/proxy/pNsEQG_Eh-VmP3H1sXA-4kL-3aaL0ZoH8cJLGYOCpfkp1PMLYGuPZu4cc_wHfvs2kk6epPeAa626ps4U8Nrta0TDxozATSkQQWtZzKpxH73lAmQ4-buvlwHf' },
    { id: 7, img: 'https://www.tom-archer.com/wp-content/uploads/2017/03/landscape-photography-tom-archer-2.jpg' }
  ];
  title = 'travel-app';
}

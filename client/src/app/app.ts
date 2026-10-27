import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Destination {
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = 'Discover Egypt';
  protected readonly year = 2026;

  protected readonly intro =
    'Egypt is a country of ancient monuments, Mediterranean coastline, desert oases and the Nile. ' +
    'This page presents a few places worth visiting.';

  protected readonly destinations: Destination[] = [
    { name: 'Giza', image: 'images/giza.jpg',
      description: 'Home of the Great Pyramids and the Sphinx, built over 4,500 years ago.' },
    { name: 'Alexandria', image: 'images/alexandria.jpg',
      description: 'A Mediterranean port city with the Corniche, Qaitbay Citadel and a modern library.' },
    { name: 'Luxor', image: 'images/luxor.jpg',
      description: 'An open-air museum with Karnak Temple and the Valley of the Kings.' },
    { name: 'Siwa Oasis', image: 'images/siwa.jpg',
      description: 'A quiet desert oasis with salt lakes, palm groves and Amazigh culture.' },
  ];

  protected readonly facts: string[] = [
    'Capital: Cairo',
    'Official language: Arabic',
    'Longest river: the Nile',
    'Coastlines: Mediterranean Sea and Red Sea',
  ];
}
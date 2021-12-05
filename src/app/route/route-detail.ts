import { Route } from './route';
import { Multimedia } from '../multimedia/multimedia';
import { Review } from '../review/review';
import { Locationn } from '../location/locationn';
import {FilesContainer} from '../FilesContainer/filesContainer';


export class RouteDetail extends Route {
  medias: Array<Multimedia>;
  reviews: Array<Review>;
  locations: Array<Locationn>;
  container: FilesContainer;
}

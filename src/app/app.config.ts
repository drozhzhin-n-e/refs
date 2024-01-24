import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AppModule } from './app.module';

export const appConfig = {
  providers: [
    // Добавьте сюда любые глобальные провайдеры
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes), // Убедитесь, что вы определили маршруты в app.routes.ts
    AppModule,
  ],
};

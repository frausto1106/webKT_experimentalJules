import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LogrosComponent } from './pages/logros/logros.component';
import { PremiumComponent } from './pages/premium/premium.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ServiciosKtComponent } from './pages/servicios-kt/servicios-kt.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { WizardComponent } from './pages/wizard/wizard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'conocenos', component: ConocenosComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'logros', component: LogrosComponent },
  { path: 'premium', component: PremiumComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'servicios-kt', component: ServiciosKtComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  { path: 'wizard', component: WizardComponent },
  { path: '**', redirectTo: '' }
];

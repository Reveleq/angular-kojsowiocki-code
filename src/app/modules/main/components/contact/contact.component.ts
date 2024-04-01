import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private scrollService: ScrollService) {}
  async send() {
    emailjs.init('sOHu_Mtt7p98OyrQl');
    let response = await emailjs.send('service_f0rmejn', 'template_apmor7j', {
      from_name: this.name,
      to_name: 'Kojsowiocki',
      from_email: this.email,
      message: this.text,
    });
    alert('Wiadomość została poprawnie wysłana');
  }
  emailRegex: string = '';
  errorText!: string;
  name!: string;
  email!: string;
  text!: string;
  ngOnInit(): void {
    setTimeout(() => {
      this.scrollService.scrollToSection();
    }, 200);
  }
}

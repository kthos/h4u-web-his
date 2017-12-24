import { Component, OnInit, ViewChild } from '@angular/core';
import { PhrService } from '../../services/phr.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styles: []
})
export class PatientComponent implements OnInit {
  @ViewChild('anc') private anc: any;
  @ViewChild('drugAllergy') private drugAllergy: any;
  @ViewChild('ncd') private ncd: any;
  @ViewChild('labfu') private labfu: any;
  @ViewChild('epi') private epi: any;
  @ViewChild('drugOPD') private drugOPD: any;

  person = {};
  query;

  constructor(
    private phrService: PhrService
  ) { }

  ngOnInit() { }

  enterSearch(event) {
    if (event.keyCode === 13) {
      this.getPerson();
      this.anc.getAnc();
      this.drugAllergy.getDrugAllergy();
      this.ncd.getNcdScreen();
      this.labfu.getLabFu();
      this.epi.getEpi();
      this.drugOPD.getLastDrug();
    }
  }

  async getPerson() {
    if (this.query) {
      try {
        const rs: any = await this.phrService.getPerson();
        if (rs.ok) {
          this.person = rs.info[0];
        } else {
          // this.alertService.error(JSON.stringify(rs.error));
        }
      } catch (error) {
        // this.alertService.serverError();
      }
    }
  }

}
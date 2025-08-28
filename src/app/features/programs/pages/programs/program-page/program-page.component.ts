import { Component } from '@angular/core';
import { ProgramService } from '../../../services/program/program.service';
import { ProgramListComponent } from '../../../components/programs/program-list/program-list.component';
import { Program } from '../../../models/program/program.model';

@Component({
  selector: 'app-program-page',
  imports: [ProgramListComponent],
  templateUrl: './program-page.component.html',
  styleUrl: './program-page.component.css'
})
export class ProgramPageComponent {
  programs: Program[] = [];

  constructor(private programService: ProgramService) {}

  ngOnInit(): void {
    this.programService.getPrograms().subscribe(response => {
      this.programs = response.data;
    });
  }
}

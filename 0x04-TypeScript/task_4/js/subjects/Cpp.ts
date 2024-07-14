namespace Subjects {
  
  export interface Teacher {
    experienceTeachingC?: number;
  }
  
  export class Cpp extends Subjects.Subject {

    getRequirements(): string => 'Here is the list of requirements for Cpp';

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC) {
        return `Available Teacher:${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
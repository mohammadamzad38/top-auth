import { Body, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'Tamil' },
    { id: 2, name: 'Amil' },
    { id: 3, name: 'Kamil' },
  ];

  getStudents() {
    return this.students;
  }

  getStudent(id: number) {
    const student = this.students.find((s) => s.id === id);

    if (!student) {
      throw new NotFoundException('Student not found');
    }

    return student;
  }



}

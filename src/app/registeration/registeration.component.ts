import { Component, OnInit } from '@angular/core';
import {validateConfirmPassword} from '../confirmpassword.validator';
import {FormBuilder,FormGroup,FormControl,FormArray,Validators } from '@angular/forms';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
 
  constructor(private _fb:FormBuilder) { }
  registerationForm:FormGroup;

  skillsData:any=[
    {'id':'1','name':'Php'},
    {'id':'2','name':'C#'},
    {'id':'3','name':'Java'},
    {'id':'4','name':'JavaScript'},
    {'id':'5','name':'HTML'}
  ];
  proficiencyData:any=[
    {'id':'1','name':'Beginner'},
    {'id':'2','name':'Expert'},
    {'id':'3','name':'Intermediate'}
  ];
  genderData:any=['male','female'];
  submitForm:boolean=false;

  ngOnInit() {
  
    this.createRegisterationForm();
  }

  onSubmit(){
    this.submitForm=true;
    if(!this.registerationForm.valid){
      return ;
    }
    
  }
  createRegisterationForm(){
    this.registerationForm=this._fb.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      password:['',Validators.required],
      confirmpassword:['',[Validators.required]],
      email:['',Validators.required],
      contactno:['',Validators.required],
      gender:['',Validators.required],
      skillset:this._fb.array([this.createSkillSet()])
    },{
      validator: [validateConfirmPassword('password','confirmpassword'),this.validateSkillFormControl('skillset')]
    });
  }
  createSkillSet() {
    return this._fb.group({
      skill:['',Validators.required],
      proficiency:['',Validators.required],
    })
  }
  addSkillSet(){
   let skillData=this.registerationForm.get('skillset') as FormArray;
   skillData.push(this.createSkillSet());
  }
  removeSkillSet(index){
    let skillData=this.registerationForm.get('skillset') as FormArray;
    skillData.removeAt(index);
  }

  validateSkill(match)
  {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[match] as FormArray;
      let selectedSkill=[];
      for(let i=0;i<control.length;i++){
        selectedSkill.push(control.controls[i]['controls']['skill'].value);
      }
      let unique=new Set(selectedSkill);
      if(unique.size==selectedSkill.length){
        formGroup.controls[match].setErrors(null);
      }
      else {
        formGroup.controls[match].setErrors({'unique':true});

      }
      
   }
  }



  validateSkillFormControl(match):{[s: string]:any }
  {
    return (formcontrol: FormControl) => {

     // const control = formcontrol[match] as FormArray;
      const control = formcontrol.get(match) as FormArray;
     // console.log(control)
      let selectedSkill=[];
      for(let i=0;i<control.length;i++){
        selectedSkill.push(control.controls[i]['controls']['skill'].value);
      }
      let unique=new Set(selectedSkill);
      if(unique.size==selectedSkill.length){
        return null;
      }
      else {
        return {'unique':true};
       // formcontrol[match].setErrors({'unique':true});

      }
      
   }
  }
}

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('dropzone') dropzone!: ElementRef;

  constructor(
    public ms: NgbActiveModal,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {}
  fileError = new BehaviorSubject<boolean>(false);
  file_msg = '';
  picList: any[] = [];
  productForm!: FormGroup;
  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      categories: [[], [Validators.required]],
      keywords: [[], [Validators.required]],
      pictures: [[], [Validators.required]],
      price: ['', [Validators.required]],
      type: [null, [Validators.required]],
      options: this.fb.array([]),
      description: ['', [Validators.required]],
    });
  }

  get f() {
    return this.productForm.controls;
  }
  get options() {
    return <FormArray>this.f['options'];
  }
  addOption() {
    const i = this.options.value.length;
    i > 0 ? this.options.controls[i - 1].markAllAsTouched() : 0;

    const data = this.options.controls[i - 1]?.value;
    console.log(this.options.controls[i - 1]);

    if (!this.options.length || (data.name && data.price))
      this.options.push(this.createOption());
  }

  createOption(): FormGroup {
    const a = this.fb.group({
      name: [''],
      price: [''],
    });
    return a;
  }

  deleteOption(index: number) {
    this.options.removeAt(index);
    this.options.updateValueAndValidity();
  }

  ngAfterViewInit(): void {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
      this.dropzone.nativeElement.addEventListener(
        eventName,
        (event: Event) => {
          event.preventDefault();
          event.stopPropagation();
        },
        false
      );
      window.addEventListener(
        eventName,
        (e) => {
          e.preventDefault();
          e.stopPropagation();
        },
        false
      );
    });

    this.dropzone.nativeElement.addEventListener('drop', (event: any) => {
      this.handleFiles(event.dataTransfer.files);
    });
  }

  handleFiles(files: any) {
    if (files.length > 2 || this.picList.length + files.length > 2) {
      this.fileError.next(true);
      this.file_msg =
        'Must upload a least one image, Maximum Files to upload is 2';
      setTimeout(() => {
        this.fileError.next(false);
      }, 5000);
      return;
    }

    this.picList.push(...files);
    this.picList.forEach((file) => {
      var reader = new FileReader();

      reader.onloadend = function () {
        file.url = reader.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        file.url = '';
      }
    });
    console.log(this.picList);
    this.f['pictures'].setValue([...this.picList]);
  }

  deletePic(index: number) {
    this.picList.splice(index, 1);
  }

  submit() {
    this.addProduct();
  }

  addProduct() {
    console.log(this.productForm.value);
    this.productForm.markAllAsTouched();
    if (this.productForm.invalid) {
      this.toastr.error(
        'Please provide required information',
        'Product Details Error'
      );
      return;
    }

    this.toastr.success('Product Added');
    this.ms.close();
  }
}

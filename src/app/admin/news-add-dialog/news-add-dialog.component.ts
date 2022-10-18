import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-news-add-dialog',
  templateUrl: './news-add-dialog.component.html',
  styleUrls: ['./news-add-dialog.component.css']
})
export class NewsAddDialogComponent implements OnInit {

  freshnessList = ["Brand New", "Second Hand", "Refurbished"];
  productForm!: FormGroup;
  actionbtn: string = 'Save'
  constructor (private formbuilder: FormBuilder, //private api: ApiCallingService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogref: MatDialogRef<DialogComponent>,) { }

  ngOnInit(): void {
    this.productForm = this.formbuilder.group({
      id: [''],
      name: ['', Validators.required],
      barcode: ['', Validators.required],
      description: ['', Validators.required],
      buyingPrice: ['', Validators.required],
      rate: ['', Validators.required]
    });
    //console.log(this.editData);
    if (this.editData) {
      this.actionbtn = 'Update'
      this.productForm.controls['id'].setValue(this.editData.id)
      this.productForm.controls['name'].setValue(this.editData.productName);
      this.productForm.controls['barcode'].setValue(this.editData.Category);
      this.productForm.controls['description'].setValue(this.editData.Freshness);
      this.productForm.controls['buyingPrice'].setValue(this.editData.Price);
      this.productForm.controls['rate'].setValue(this.editData.Comments);

    }

  }
  addProduct() {
    console.log(this.productForm.value);
    console.log(this.editData);
    if (this.editData == null) {
      console.log("if");
      if (this.productForm.valid) {
        console.log("nested if");
        this.api.postProduct(this.productForm.value)
          .subscribe({
            next: (response) => {
              alert("Product Added Sucessfully..!");
              this.productForm.reset();
              this.dialogref.close('Saved');
            },
            error: () => {
              alert("Error while adding the product ");
            }
          })
      }
    }
    else {
      console.log("else");
      this.updateProduct()
    }
  }
  updateProduct() {
    this.api.putProduct(this.productForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Product udatet succesfully");
          this.productForm.reset();
          this.dialogref.close('update');
        },
        error: () => {
          alert('Error while updating the record!')
        }
      })
  }

}

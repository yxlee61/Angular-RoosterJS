import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  Provider,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Editor, IEditor } from 'roosterjs';

import { RoosterJsEditorService } from './rooster-js-editor.service';

const ROOSTERJSEDITOR_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AppComponent),
  multi: true,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ROOSTERJSEDITOR_CONTROL_VALUE_ACCESSOR],
})
export class AppComponent implements AfterViewInit, ControlValueAccessor {
  public ngAfterViewInit(): void {
    this.editor = this.editorService.createEditor(this);
  }

  public registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(_: boolean): void {
    throw new Error('setDisableState() is not implemented');
  }

  public writeValue(value: string): void {
    // there seems be a delay between editor created and writeValue so adding a timeout
    if (!this.editor) {
      setTimeout(() => {
        this.writeValue(value);
      }, 500);
    } else {
      this.editor.setContent(value);
    }
  }
  public bold = false;
  public editor: IEditor;
  public italic = false;
  public list = false;

  public onChange!: (_: any) => void;
  public onTouched!: () => void;
  public underline = false;

  constructor(
    private editorService: RoosterJsEditorService,
    public elementRef: ElementRef
  ) {}
}

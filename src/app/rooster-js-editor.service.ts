import { Injectable } from '@angular/core';
import { IEditor } from 'roosterjs';
import {
  toggleBold,
  toggleItalic,
  toggleUnderline,
} from 'roosterjs-editor-api';
import { default as createEditor } from 'roosterjs/lib/createEditor';

import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class RoosterJsEditorService {
  public createEditor(component: AppComponent): IEditor {
    const root = component.elementRef.nativeElement as HTMLElement;
    const container = root.querySelector(
      '#js-rooster-editor-container'
    ) as HTMLDivElement;
    const btnBold = root.querySelector('#js-rooster-editor-bold');
    const btnItalic = root.querySelector('#js-rooster-editor-italic');
    const btnUnderline = root.querySelector('#js-rooster-editor-underline');

    btnBold.addEventListener('click', () => {
      toggleBold(editor);
    });

    btnItalic.addEventListener('click', () => {
      toggleItalic(editor);
    });

    btnUnderline.addEventListener('click', () => {
      toggleUnderline(editor);
    });

    container.addEventListener('blur', (_) => component.onTouched());

    const editor = createEditor(container, null);

    return editor;
  }
}

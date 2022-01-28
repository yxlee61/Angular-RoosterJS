import { TestBed } from '@angular/core/testing';

import { RoosterJsEditorService } from './rooster-js-editor.service';

describe('RoosterJsEditorService', () => {
  let service: RoosterJsEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoosterJsEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

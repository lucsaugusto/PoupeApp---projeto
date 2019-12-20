import { TestBed } from '@angular/core/testing';

import { PostagemService } from './postagem.service';

describe('PostagemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostagemService = TestBed.get(PostagemService);
    expect(service).toBeTruthy();
  });
});

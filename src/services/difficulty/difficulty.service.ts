import { DIFFICULTYS } from '../../constants/difficultys';
import { Difficulty } from '@/models/difficulty.interface';

export class DifficultyService {
  public static getDifficultys(): Difficulty[] {
    return DIFFICULTYS.map(difficulty => ({
      ...difficulty,
    }));
  }

  public static getDifficultyById(id: Number): Difficulty | undefined {
    return this.getDifficultys().find(difficulty => difficulty.id === id);
  }
} 
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export function Autobuy() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode" className="text-slate-500">
        Autobuy
      </Label>
    </div>
  );
}

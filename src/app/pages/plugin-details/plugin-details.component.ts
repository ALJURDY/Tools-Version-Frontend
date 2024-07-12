import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plugin } from 'src/app/models/plugin.model';
import { PluginService } from 'src/app/services/plugin.service';

@Component({
  selector: 'app-plugin-details',
  templateUrl: './plugin-details.component.html',
  styleUrls: ['./plugin-details.component.css']
})
export class PluginDetailsComponent {

  plugin:Plugin | undefined;

  constructor(
    private pluginService: PluginService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  returnToHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name');

        this.loadPlugin(name);
    });
  }

  loadPlugin(name:string | null) {
    this.pluginService.getPluginByName(name).subscribe(data => {
      this.plugin = data;
    });
  }

}

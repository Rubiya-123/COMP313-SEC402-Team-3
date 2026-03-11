package com.dealership.controller;

import com.dealership.model.Car;
import com.dealership.service.CarService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
@CrossOrigin(origins = "http://localhost:5173")
public class CarController {

    private final CarService service;

    public CarController(CarService service){
        this.service = service;
    }

    // GET ALL CARS
    @GetMapping
    public List<Car> getCars(){
        return service.getAllCars();
    }

    // GET CAR BY ID
    @GetMapping("/{id}")
    public Car getCar(@PathVariable Long id){
        return service.getCarById(id);
    }

    // ADD VEHICLE
    @PostMapping
    public Car addCar(@RequestBody Car car){
        return service.saveCar(car);
    }

    // UPDATE VEHICLE
    @PutMapping("/{id}")
    public Car updateCar(@PathVariable Long id, @RequestBody Car car){
        car.setId(id);
        return service.saveCar(car);
    }

    // DELETE VEHICLE
    @DeleteMapping("/{id}")
    public void deleteCar(@PathVariable Long id){
        service.deleteCar(id);
    }
}